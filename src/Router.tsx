import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Table from "./components/Table";

export const Router: React.FC = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <Layout>
              <Table />
            </Layout>
          ),
        },
        {
          path: "/:id",
          element: (
            <Layout>
              <Table />
            </Layout>
          ),
        },
      ])}
    />
  );
};
