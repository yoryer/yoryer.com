---
title: "Building My Custom Mechanical Keyboard"
description: "The journey of designing and building a custom mechanical keyboard from scratch, including component selection and assembly process."
date: 2024-10-05
tags: ["mechanical-keyboard", "diy", "hardware", "productivity", "tools"]
featured: false
lang: "en"
slug: "custom-mechanical-keyboard"
---

# Building My Custom Mechanical Keyboard

As a software developer who spends countless hours typing, I've always been fascinated by mechanical keyboards. After using various off-the-shelf options, I decided it was time to build something truly customized to my needs and preferences.

## Why Build a Custom Keyboard?

The decision to build a custom mechanical keyboard came from several pain points with commercial options:

- **Limited Layout Options**: Most keyboards don't offer the exact layout I wanted
- **Switch Preferences**: I wanted to experiment with different switch types
- **Build Quality**: Many keyboards compromise on materials to hit price points
- **Personalization**: I wanted something uniquely mine

## Planning the Build

### Layout Decision

After much research, I settled on a 75% layout because it offers:

- Function keys (essential for development)
- Compact footprint
- Arrow keys and navigation cluster
- Good balance between functionality and desk space

### Component Selection

**PCB**: I chose a hot-swappable PCB to allow switch experimentation without soldering.

**Switches**: After testing various options, I went with:

- **Gateron Oil Kings** for alphas (smooth linear switches)
- **Boba U4T** for modifiers (tactile switches for intentional key presses)

**Keycaps**: PBT double-shot keycaps in a clean, minimalist profile that doesn't distract from code.

**Case**: Aluminum case for durability and premium feel.

## The Build Process

### Step 1: PCB Preparation

First, I tested the PCB to ensure all switches registered correctly:

```bash
# Used VIA software to test each key position
# Flashed QMK firmware with my custom layout
```

### Step 2: Stabilizer Installation

Proper stabilizer installation is crucial for larger keys:

- Clipped and lubed stabilizers for smooth operation
- Band-aid mod on mounting points to reduce rattle
- Balanced wire tension for consistent feel

### Step 3: Switch Installation

The hot-swap PCB made this straightforward:

- Carefully aligned each switch to prevent bent pins
- Ensured consistent seating across all positions
- Double-checked actuation before proceeding

### Step 4: Assembly

Final assembly was satisfying but required patience:

- Foam dampening material between PCB and case
- Careful cable routing for clean internal layout
- Multiple test fittings to ensure perfect alignment

## Custom Programming

One of the biggest advantages of a custom keyboard is programmability. Using QMK firmware, I implemented:

### Layer System

```c
// Layer 0: Base QWERTY layout
// Layer 1: Function keys and media controls
// Layer 2: Development-specific shortcuts
```

### Development-Focused Features

- **Bracket Macros**: Quick access to different bracket types
- **Git Shortcuts**: Common git commands on a dedicated layer
- **IDE Navigation**: Custom shortcuts for VS Code and other editors

### Productivity Enhancements

- **Auto-shift**: Hold any key longer for its shifted version
- **Tap Dance**: Multi-function keys that do different things based on tap count
- **Leader Key**: Vim-style leader sequences for complex actions

## The Programming Experience

### QMK Configuration

Setting up QMK was surprisingly approachable:

```c
// keymap.c snippet
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [0] = LAYOUT(
        KC_ESC,  KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   KC_F6,   KC_F7,   KC_F8,   KC_F9,   KC_F10,  KC_F11,  KC_F12,  KC_PSCR, KC_DEL,
        KC_GRV,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_MINS, KC_EQL,  KC_BSPC, KC_HOME,
        // ... rest of layout
    ),
};
```

### Custom Macros

I implemented several macros for common development tasks:

```c
// Auto-bracket macro
case BRACKETS:
    if (record->event.pressed) {
        SEND_STRING("()");
        tap_code(KC_LEFT);
    }
    break;
```

## Lessons Learned

### What Worked Well

- **Hot-swap PCB**: Game-changer for experimentation
- **Multiple Switch Types**: Using different switches for different key groups
- **QMK Firmware**: Incredibly powerful and flexible
- **Quality Components**: Worth investing in good switches and keycaps

### Challenges Faced

- **Learning Curve**: QMK documentation can be overwhelming initially
- **Component Compatibility**: Not all parts work together seamlessly
- **Time Investment**: The build process took much longer than expected
- **Cost**: Quality components add up quickly

### Unexpected Benefits

- **Typing Improvement**: More intentional typing due to the tactile feedback
- **Desk Aesthetics**: The custom board became a conversation piece
- **Technical Skills**: Learned about electronics, firmware, and hardware design
- **Community**: Connected with the mechanical keyboard enthusiast community

## Impact on Development Work

After using the custom keyboard for several months:

### Productivity Gains

- **Faster Navigation**: Custom shortcuts reduced time spent in menus
- **Reduced RSI**: Better ergonomics and switch choice reduced hand strain
- **Improved Accuracy**: Quality switches reduced typos
- **Mental Focus**: The satisfying typing experience improved concentration

### Workflow Integration

The keyboard integrates seamlessly with my development environment:

- **IDE Shortcuts**: Custom layer for VS Code, IntelliJ, and Vim
- **Terminal Navigation**: Optimized for command-line work
- **Git Integration**: Quick access to common git operations
- **Documentation**: Shortcuts for quickly accessing docs and references

## Future Improvements

I'm already planning the next iteration:

### Hardware Upgrades

- **Gasket Mount**: For improved typing feel
- **Rotary Encoder**: For volume and scroll control
- **OLED Display**: To show current layer and system info
- **Wireless Option**: Exploring ZMK firmware for wireless builds

### Software Enhancements

- **Advanced Macros**: More sophisticated text manipulation
- **Context-Aware Layers**: Different layouts for different applications
- **RGB Integration**: Functional lighting that indicates layer state
- **Productivity Metrics**: Tracking typing patterns and efficiency

## Conclusion

Building a custom mechanical keyboard has been one of the most rewarding technical projects I've undertaken. It combines hardware, software, and design in a way that directly impacts my daily work.

The process taught me:

- The importance of quality tools for professional work
- How deep customization can improve efficiency
- The value of community knowledge and open-source projects
- That the best solutions often require time and iteration

For fellow developers considering a custom keyboard: the investment in time and money pays dividends in daily comfort and productivity. Start with a simple build and iterate—you'll be surprised how much it improves your development experience.

## Resources

- **QMK Firmware**: [qmk.fm](https://qmk.fm)
- **Keyboard University**: Comprehensive learning resource
- **r/MechanicalKeyboards**: Active community for advice and inspiration
- **Vendor Recommendations**: Based on personal experience with quality and service

The custom keyboard has become an essential part of my development setup, and I can't imagine going back to off-the-shelf options. If you spend significant time typing, investing in a quality, customized input device is one of the best upgrades you can make.
