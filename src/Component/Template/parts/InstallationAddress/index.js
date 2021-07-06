import React from "react";

function InstallationAddress({ data }) {
  return (
    <div className="instalation-address">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">ALAMAT INSTALASI</span>{" "}
            <span className="font-italic">/ Instalastion Address</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <textarea
                disabled
                value={data}
                id=""
                style={{ width: "90%", height: "90px" }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InstallationAddress;
