# Vector AI Image Gallery - Frontend

This is a react app that displays image gallery with draggable ordering and preview functionality.

## Getting started

To get the frontend running locally:

- Clone this repo
  - `git clone https://github.com/kinglarce/vectorai-image-gallery-frontend.git`
- Install the required dependencies
  - `npm install`
- Provide the `REACT_APP_API_URL` environment variable for the backend API.
- Start the development server
  - `npm start`
- Visit URL
  - `http://localhost:3000/`

### Requesting backend API

The source code for the backend api can be found in the [https://github.com/kinglarce/vectorai-image-gallery-backend](https://github.com/kinglarce/vectorai-image-gallery-backend).

If you want to change the API URL to a different backend server, simply edit `.env` and change `REACT_APP_API_URL` to what you desired.

## Functionality overview

- Fetch data from the backend.
- Sync changes done from frontend to backend.
- Display data with images associated with it.
- Loading while image is being loaded.
- Loading while syncing changes to backend.
- Drag and drop reorder of data.
- Image preview(with ESC key functionality).

## Frontend Structure

- `src/api` - This folder contains the function for requesting to our API. This fetches and sync data to the backend.
- `src/index.tsx` - This file is the entry point to our frontend.
- `src/App.tsx` - This file is the entry point to our components.
- `src/interface.ts` - This file contains the shared interfaces for type checking.
- `src/components` - This folder contains the components for our frontend.
  - `ImageGallery` - Handles for display Images and detail in grid, as well as in-charge of draggable functionality.
  - `ImageView` - Handles the previewing of image.
  - `ImageDetail` - Handles the display of image and metadata like image title.
  - `Loading` - Handles loading animations.

<br />