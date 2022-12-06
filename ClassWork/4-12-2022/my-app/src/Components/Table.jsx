import React from "react";

const Table = ({ heading, data }) => {
  return (
    <>
      <table style={{ flex: "1" }} className="table">
        <thead>
          <tr>
            <th>{heading}</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((elem) => {
              return (
                <tr>
                  <td>{elem}</td>
                </tr>
              );
            })
          ) : (
            <h6>No Order Yet</h6>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
