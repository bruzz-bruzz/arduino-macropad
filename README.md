# Macro Pad Project

[Link](https://arduino-macropad.vercel.app/)

A custom HID macro pad built with an Arduino Pro Micro to automate keyboard and Git workflows.

## Features
- **Customizable HID**: Automate keyboard and Git workflows.
- **3D Enclosure**: Designed for durability and aesthetics.
- **Web Visualizer**: Interactive 3D visualization of the enclosure.

## Project Structure

- [**Arduino Firmware & Hardware**](./arduino/): Firmware (`code.ino`) and 3D enclosure files.
- [**Frontend Visualizer**](./frontend/): React application for 3D visualization.

## Getting Started

### Hardware
1. Upload the `code.ino` file to your Arduino Pro Micro.
2. 3D print the enclosure files.

### Frontend
See the [Frontend README](./frontend/README.md) for instructions on running the web visualizer.

## Overview
The project consists of:
1. **Firmware**: Arduino code running on an ATmega32U4 board, mapping 4 physical buttons to specific actions.
2. **Hardware**: 3D-printed enclosure designed to house the switches and controller.
3. **Web Interface**: React application to visualize the enclosure parts in 3D using React Three Fiber.
