# Project Architecture

This project uses an ArcGIS Online focused portfolio architecture.

ArcGIS Online is used as the public GIS presentation layer for operational web mapping, cartographic styling, popups, labels, interactive filtering, and Instant App configuration.

The project is organized around one core web map and multiple ArcGIS Instant Apps. Each app supports a different user workflow while using the same operational map foundation.

## Architecture Overview

ArcGIS Online
= public GIS presentation layer / portfolio apps

Utility Operations Base Map
= core operational web map used by the apps

Utility Emergency Operations
= Basic (Media Map) Instant App for executive-style operational viewing

Utility Operations Dashboard
= Sidebar Instant App for layer control, legend review, and operational map navigation

Utility Incident Severity Analysis
= Interactive Legend Instant App for severity-based incident exploration

Utility GIS Operations Platform
= Portfolio Instant App that organizes the ArcGIS applications into one GIS operations platform

## Data Approach

The source incident and depot data are stored as CSV files in the repository for transparency and reproducibility.

Because this project was built with a free ArcGIS Online public account, publishing CSV files as Hosted Feature Layers was not available. The CSV datasets were used in ArcGIS Online for mapping and app configuration where supported.

## Design Focus

This project focuses on demonstrating ArcGIS Online skills, including:

- Map Viewer configuration
- Operational layer organization
- Symbology by incident severity
- Popup design
- Label styling and halo use
- Visibility and clutter reduction
- Service coverage zone styling
- Basic (Media Map) app configuration
- Interactive Legend app configuration
- Sidebar app configuration
- Portfolio app organization

## Role of This Repository

This GitHub repository documents the ArcGIS implementation, stores source CSV data, and explains the architecture and design decisions behind the ArcGIS Online portfolio component.

Custom Leaflet/QGIS development is intentionally kept separate to avoid duplicating functionality in this ArcGIS-focused repository.
