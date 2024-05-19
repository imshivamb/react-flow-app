# Chatbot Flow Builder

Welcome to the Chatbot Flow Builder! This project enables you to create chatbot flows by connecting multiple messages to determine the execution sequence.

## Features

### 1. Text Node
- **Single Message Type**: At present, the flow builder supports only Text Messages.
- **Multiple Instances**: You can add multiple Text Nodes within a single flow.
- **Drag-and-Drop Interface**: Add nodes to your flow by dragging them from the Nodes Panel.

### 2. Nodes Panel
- **Node Repository**: This panel contains all the types of nodes supported by the Flow Builder.
- **Future-Proof Design**: Although only the Message Node is available now, this section is designed to accommodate additional node types in future updates.

### 3. Edge
- **Connection Mechanism**: Edges link two nodes to establish a flow.

### 4. Source Handle
- **Starting Point**: The source handle acts as the origin for an edge.
- **Single Connection**: Each source handle can only initiate one edge.

### 5. Target Handle
- **End Point**: The target handle is where an edge connects.
- **Multiple Connections**: Each target handle can accept multiple edges.

### 6. Settings Panel
- **Dynamic Replacement**: The Settings Panel replaces the Nodes Panel when a node is selected.
- **Editable Fields**: It includes a text field for modifying the text of the selected Text Node.

### 7. Save Button
- **Save Functionality**: Allows you to save the current flow.
- **Validation Check**: Upon saving, the system will flag an error if more than one node exists with empty target handles.

## Hosted Domain

You can access the Chatbot Flow Builder at: [react-flow-sb.vercel.app](https://react-flow-sb.vercel.app)

## Technologies Used

- **Next.js**: The React framework used for building the application.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Flow**: A library for building node-based graphs.

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites
- Node.js (v18 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/imshivamb/chatbot-flow-builder.git
   cd chatbot-flow-builder
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and go to `http://localhost:3000`.

### Building for Production

5. To create a production build:
   ```sh
   npm run build
   # or
   yarn build
   ```

6. To start the production server:
   ```sh
   npm start
   # or
   yarn start
   ```

## Contributing

We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.


## Contact

For any questions or suggestions, please reach out to us at [shivambhardwaj1503@gmail.com](mailto:shivambhardwaj1503@gmail.com).

Happy building!
