# Arduino Firmware & Hardware

This folder contains the core implementation for the macro pad.

## Contents
- `code.ino`: The main Arduino sketch. It uses the `HID-Project` library to emulate a keyboard and send shortcuts/Git commands.
- `keycase.stl`: 3D model for the main enclosure.
- `keyplate.stl`: 3D model for the switch mounting plate.

## How to use
1. Install [Arduino IDE](https://www.arduino.cc/en/software).
2. Install `HID-Project` via Library Manager.
3. Select "Arduino Leonardo" or "Arduino Micro".
4. Upload `code.ino` to your Pro Micro board.
