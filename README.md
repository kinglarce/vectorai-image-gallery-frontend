# Vector AI Image Gallery - Frontend

This is a react app that displays image gallery with draggable ordering and preview functionality.

## Getting started

To get the frontend running locally:

- Clone this repo
  - `git clone https://github.com/kinglarce/vectorai-image-gallery-frontend.git`
- Install the required dependencies
  - `npm install`
- Start the development server
  - `npm start`
- Visit URL
  - `http://localhost:3000/`

### Requesting backend API

To be added.

## Functionality overview

- Fetch from static data.
- Display data with images associated with it.
- Loading while image is being loaded.
- Drag and drop reorder of data.
- Image preview(with ESC key functionality).

## Frontend Structure

- `src/api` - This folder contains the function for requesting to our API. It is current return static data.
- `src/index.tsx` - This file is the entry point to our frontend.
- `src/App.tsx` - This file is the entry point to our components.
- `src/components` - This folder contains the components for our frontend.
  - `ImageGallery` - Handles for display Images and detail in grid, as well as in-charge of draggable functionality.
  - `ImageView` - Handles the previewing of image.
  - `ImageDetail` - Handles the display of image and metadata like image title.

<br />