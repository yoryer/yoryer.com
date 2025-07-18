---
title: "Certificate Pinning con Flutter"
description: "Guía para implementar certificate pinning en aplicaciones Flutter utilizando Dart."
date: 2020-11-11
tags: ["flutter", "dart", "certificate", "certificate-pinning"]
featured: false
lang: "es"
slug: "flutter-certificate-pinning-es"
previewImg: "/media/art001-cp-preview.jpg"
imageCredit: "https://www.pexels.com/@savvas-stavrinos-270619/"
---

Una de las recomendaciones más comunes a la hora de desarrollar aplicaciones móviles es el _Certificate Pinning_, y en este artículo vamos a ver un método sencillo para incluir en nuestras aplicaciones hechas con **Flutter**.

## Qué es?

El _Certificate Pinning_ es en pocas palabras una forma de verificar la identidad del servidor con el que nos estamos comunicando y de esa forma asegurar el tráfico de red de una aplicación. Así nuestra aplicación solo confía de manera _exclusiva_ en las peticiones desde y hasta el servidor cuyo certificado estemos especificando dentro de nuestra aplicación.

Todo el resto del flujo de red a servidores cuyos certificados nuestra aplicación no reconozca serán rechazados.

## Implementar Certificate Pinning

Vamos a ver en pocos pasos una manera sencilla y fácil de implementar _Certificate Pinning_ en **Flutter**. En este ejemplo vamos a utilizar una de las APIs abiertas más conocidas y reconocidas [**PokeAPI**](https://pokeapi.co/).

_PokeAPI es una RestfulAPI abierta al público que no requiere registro ni clave de acceso, y que dispone de manera gratuita la lista de todos los Pokemon._

### Paso 1: Obtener el Certificado SSL del servidor

Lo primero que debemos hacer es obtener el _Certificado SSL_ en el formato _.pem_, un formato amigable para trabajar. En este caso para obtener el certificado vamos a usar el navegador web _Firefox_, el cual tiene como parte del propio navegador una herramienta muy útil para revisar los certificados de las páginas web que visitamos.

Ingresamos al sitio web de _PokeAPI_ y para poder ver el certificado vamos a la opción _Tools → Page Info_ o también utilizando el atajo de teclado _Cmd + i_.

<div class="flex justify-center">
<img class="w-[250px]" src="/media/art001-cp-firefox-01.png" alt="Firefox Tools Menu" />
</div>

Una vez hayamos seleccionado la opción para visualizar la información de la página, vamos a la pestaña _Security_ y pulsamos sobre el botón _View Certificate_.

<div class="flex justify-center">
<img src="/media/art001-cp-firefox-02.png" alt="Firefox Security Tab" width="550px" />
</div>

Al pulsar sobre la opción que nos va a permitir ver el certificado se nos va a abrir una nueva pestaña en el navegador, mostrandonos una serie de cabeceras, normalmente van a ser tres elementos y el primero que está seleccionado es el que nos importa.

La cuestión en este punto es poder descargar el archivo _.pem_ del certificado del servidor, las otras opciones que se pueden ver son los _certificados intermedios_ y los _certificados en las entidades emisoras_ que forman parte de la [cadena de confianza](https://es.wikipedia.org/wiki/Cadena_de_confianza) entre certificados.

Moviéndonos un poco hacia abajo en la pestaña que contiene la información del certificado vamos a encontrar la opción para descargar el certificado dentro del apartado _Miscellaneous_, la opción que nos interesa es la primera **PEM (cert)**, que descargará solamente el certificado del servidor.

<div class="flex justify-center">
<img class="w-[450px]" src="/media/art001-cp-firefox-03.png" alt="Firefox Certificate Download" />
</div>

Luego de haber descargado el archivo en nuestra computadora, deberíamos tener un archivo con la extensión _.pem_ que es el certificado en el que estamos interesados, su aspecto debería ser similar al siguiente.

```text
-----BEGIN CERTIFICATE-----
MIIEvjCCBGSgAwIBAgIQAp2/CYVt9VZ7Sf2GIJyGuDAKBggqhkjOPQQDAjBKMQsw
CQYDVQQGEwJVUzEZMBcGA1UEChMQQ2xvdWRmbGFyZSwgSW5jLjEgMB4GA1UEAxMX
Q2xvdWRmbGFyZSBJbmMgRUNDIENBLTMwHhcNMjAwODE0MDAwMDAwWhcNMjEwODE0
MTIwMDAwWjBtMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDVNh
biBGcmFuY2lzY28xGTAXBgNVBAoTEENsb3VkZmxhcmUsIEluYy4xHjAcBgNVBAMT
FXNuaS5jbG91ZGZsYXJlc3NsLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IA
BO3d/E4ml2Adhff/ziIlpAr+ULUlG3RyG+fxngarxdh/8h2p3ChO+0EWSOo1y5rN
ryTIKgUcafhwYI3Q0ApzgHyjggMHMIIDAzAfBgNVHSMEGDAWgBSlzjfq67B1DpRn
iLRF+tkkEIeWHzAdBgNVHQ4EFgQUwQrggFiZrQJLGp2FJqeYx+qMKC4wOgYDVR0R
BDMwMYIMKi5wb2tlYXBpLmNvghVzbmkuY2xvdWRmbGFyZXNzbC5jb22CCnBva2Vh
cGkuY28wDgYDVR0PAQH/BAQDAgeAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEF
BQcDAjB7BgNVHR8EdDByMDegNaAzhjFodHRwOi8vY3JsMy5kaWdpY2VydC5jb20v
Q2xvdWRmbGFyZUluY0VDQ0NBLTMuY3JsMDegNaAzhjFodHRwOi8vY3JsNC5kaWdp
Y2VydC5jb20vQ2xvdWRmbGFyZUluY0VDQ0NBLTMuY3JsMEwGA1UdIARFMEMwNwYJ
YIZIAYb9bAEBMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3LmRpZ2ljZXJ0LmNv
bS9DUFMwCAYGZ4EMAQICMHYGCCsGAQUFBwEBBGowaDAkBggrBgEFBQcwAYYYaHR0
cDovL29jc3AuZGlnaWNlcnQuY29tMEAGCCsGAQUFBzAChjRodHRwOi8vY2FjZXJ0
cy5kaWdpY2VydC5jb20vQ2xvdWRmbGFyZUluY0VDQ0NBLTMuY3J0MAwGA1UdEwEB
/wQCMAAwggEDBgorBgEEAdZ5AgQCBIH0BIHxAO8AdgD2XJQv0XcwIhRUGAgwlFaO
400TGTO/3wwvIAvMTvFk4wAAAXPsGBnRAAAEAwBHMEUCIANDBwmRfQuryBQGuJEC
jrQpU5gEjxdz/oFLrIlhgzsOAiEA8oCU/zVLpBmSFgXSOnbQyRhQgBV9PYmcAI6p
+F7ApEEAdQBc3EOS/uarRUSxXprUVuYQN/vV+kfcoXOUsl7m9scOygAAAXPsGBn9
AAAEAwBGMEQCIDcY6cPBaLt7+6aOKLZUn1ke3DhnObmXcYlJ3pa8jVu9AiBwAgik
HldztAA2V0bRbny+mBmwhxjwJfYpO/MEOCJ20TAKBggqhkjOPQQDAgNIADBFAiAf
SveArpf/TS8nWvx58hjlZZFSgus5CI/Tqg7ws9Nm0wIhALJSYFQM6oHVOJHvYHrb
UvrcjElb+g5XwjIEeFVJudnI
-----END CERTIFICATE-----
```

### Paso 2: Convertir el archivo PEM en una variable de Dart

Para poder utilizar el certificado debemos convertir el contenido del archivo _.pem_ en una variable de Dart, que pueda ser usada a la hora de construir el objeto que nos va a permitir realizar consultas http.

Con este objetivo en mente creé un pequeño **gist** que puede ser usado para convertir este archivo en una variable de tipo Uint8List.

<div class="not-prose">
<script src="https://gist.github.com/yoryer/52ced7b661003e9ad3d85569e114b0d2.js"></script>
</div>

Preparamos los directorios y el script para ejecutar la conversión de los archivos.

<div class="not-prose flex justify-center">
<img class="w-[250px]" src="/media/art001-cp-finder.png">
</div>

Para ejecutar el script sencillamente nos dirigimos al directorio donde está nuestro script y ejecutamos lo siguiente:

```bash
dart main.dart
```

Al finalizar la ejecución debe de aparecer un nuevo archivo en el directorio _generated_, el contenido de ese archivo debe ser parecido a esto:

```dart
import 'dart:typed_data';

Uint8List certificate = Uint8List.fromList([
  45,
  45,
  45,
  ...
  45,
  13,
  10
]);
```

Con esto ya tendremos nuestro certificado listo para ser utilizado en nuestras peticiones!

### Paso 3: Incluir el certificado en el cliente HTTP

En este paso vamos a crear nuestro cliente HTTP para poder comenzar a enviarle nuestras peticiones al servidor de PokeAPI, para esto vamos a ver algunos puntos a tomar en cuenta.

Incluir la dependencia del paquete _http_

```yaml
# ...
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.0+2
# ...
```

Con las siguientes líneas podemos generar el cliente HTTP con el certificado incluído.

```dart
import 'package:http/http.dart' as http;
import 'package:http/io_client.dart';

import 'sni-cloudflaressl-com.dart';

SecurityContext securityContext = SecurityContext(withTrustedRoots: false);
securityContext.setTrustedCertificatesBytes(certificate);

HttpClient httpClient = HttpClient(context: securityContext);

http.Client client = IOClient(httpClient);
```

1. **import 'sni-cloudflaressl-com.dart';** Importamos el archivo que contiene la variable con la información del certificado.
2. **withTrustedRoots: false** Especificamos que no queremos incluir los certificados de las entidades emisoras.
3. **securityContext.setTrustedCertificatesBytes(certificate)** Establecemos el certificado de confianza en el _SecurityContext_ usando la variable _certificate_.
4. **http.Client** Crear el http.Client a partir del IOClient que puede incluir el certificado.

### Paso 4: Probar una solicitud a la API

Juntamos todo lo que vimos y debajo de nuestro nuevo cliente HTTP que ya incluye el certificate pinning realizamos al llamada a la API para consultar los datos que estamos buscando.

```dart
String result;

try {
  http.Response response = await client.get(
    'https://pokeapi.co/api/v2/pokemon/pikachu',
  );
  result = response.body;
} catch (exception) {
  result = exception.toString();
}
```

Con el código de arriba estamos pidiendo a PokeAPI los datos del pókemon **Pikachu**. En caso de que nuestra petición sea exitosa nos va a retornar un texto en formato JSON con toda la información del Pokemon, caso contrario nos devolverá un error.

Si quieres ver un ejemplo más claro de la implementación de un certificate pinning puedes revisar el [repositorio en Github](https://github.com/yoryer/flutter_certificate_pinning) donde muestro un caso exitoso y otro fallido.

<div class="flex justify-center">
<img class="w-[250px] p-2" src="/media/art001-cp-pikachu.png" alt="Pikachu Result" />
</div>
