# Macro Pad Project

[Link](https://arduino-macropad.vercel.app/)

A custom HID macro pad built with an Arduino Pro Micro to automate keyboard and Git workflows.

## Project Structure

- [**Arduino Firmware & Hardware**](./arduino/): Firmware (`code.ino`) and 3D enclosure files.
- [**Frontend Visualizer**](./frontend/): React application for 3D visualization.

## Overview
The project consists of:
1. **Firmware**: Arduino code running on an ATmega32U4 board, mapping 4 physical buttons to specific actions.
2. **Hardware**: 3D-printed enclosure designed to house the switches and controller.
3. **Web Interface**: React application to visualize the enclosure parts in 3D using React Three Fiber.
