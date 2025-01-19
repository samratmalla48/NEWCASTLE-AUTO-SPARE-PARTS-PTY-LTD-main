import React from "react";
import Layout from "../components/layouts/Layout";

const Catalogue = () => {
  const items = [
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1",
      price: "$10",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is product 2",
      price: "$20",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is product 3",
      price: "$30",
    },
  ];

  return (
    <Layout title="Catalogue">
      <h1>Catalogue Page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>
              <strong>{item.price}</strong>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Catalogue;
