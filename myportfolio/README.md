# PredictSpring Javascript Exercise

Overview
Objective is to make a simple visual editor. The editor will have a pallet area, a layout area, and an action area. You may use any frameworks you wish.
Requirements
1. The layout area is vertical list of four square cells
2. The pallet area is a list of images. Just pick a few test images from the web to use.
3. Images can be dragged and dropped onto any of the layout area cells
4. Layout area cells can be split vertically or horizontally in half to create two new layout
cells, which can also be split further. Layout cells that are split occupy the same space as the cell that they were split from. So, if a cell is split horizontally, there will be ​two new cells ​that ​occupy the same space ​as the cell that was split, except ​each new cell is half ​the height, and one cell covers the top and one cell covers the bottom.
a.
5. New layout cells can be added to the bottom of the layout area by clicking a button in the
action area.
6. Clicking and dragging one cell onto another swaps the contents of the cells.
7. The layout area can be saved and recalled by clicking a “Save” button in the action area
that presents a popup asking the user for a name for the layout.
8. The action area will have a “Save” button, a “Load” button, and a dropdown with all
previously saved layouts.
9. Selecting a previously saved layout from the drop-down and clicking “Load” will replace
the contents of the layout area with the saved layout.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `netlify deploy --prod`

use this for Production deploy.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
