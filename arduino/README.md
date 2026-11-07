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

## Bill of Materials (BOM)

| Item | Designator | Qty | Description | Value / Package | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | U1 | 1 | Microcontroller Board | Arduino Pro Micro | Must be ATmega32U4 based for native USB HID support (5V/16MHz) |
| **2** | S1 - S4 | 4 | Tactile Pushbutton Switch | SPST-NO | 6x6x5mm or 12x12mm through-hole momentary switches |
| **3** | - | 4 | Keycaps (Optional) | 1U Size | For tactile feel and aesthetics; must match switch stem type |
| **4** | - | 2 | Breakaway Header Pins | 12-pin, 2.54mm | To mount the Pro Micro to a PCB or perfboard (or solder wires directly) |
| **5** | - | 1 | USB Cable | Micro-USB | Data-capable cable (not charge-only) to connect to the PC |
| **6** | - | 1 | Enclosure / Perfboard | Custom | 3D printed case, acrylic plates, or standard prototyping perfboard |
| **7** | - | - | Hook-up Wire | 24 AWG (Solid) | For point-to-point wiring (if not using a custom PCB) |

## Schematic

[Schematic](schematic.svg)

## Demos

[Demo1](demo1.jpeg)

[Demo2](demo2.jpeg)