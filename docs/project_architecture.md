# Project Architecture

This project uses an ArcGIS-first portfolio architecture supported by Python, Jupyter, and DuckDB Spatial.

ArcGIS Online is used for Web GIS visualization, operational mapping, symbology, popups, and dashboard presentation.

DuckDB Spatial is used as a lightweight local spatial SQL engine because it is portable, easy to reproduce in Jupyter, and suitable for a free GitHub-based portfolio workflow.

The SQL workflow is designed around enterprise spatial database concepts similar to PostgreSQL/PostGIS, including spatial validation, geometry handling, attribute querying, and analysis-ready exports.