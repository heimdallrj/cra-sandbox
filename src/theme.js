// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefix: 'jp',
  theme: `
    html {}
    body {}
    h1, h2, h3, h4, h5, h6 {}
    p { }
    /* Table Styles */
    table {
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 0.9em;
      font-family: sans-serif;
      min-width: 400px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    table thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
    }
    table th,
    table td {
      padding: 12px 15px;
    }
    table tbody tr {
      border-bottom: 1px solid #dddddd;
    }
    table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    table tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
    }
    table tbody tr.active-row {
      font-weight: bold;
      color: #009879;
    }
  `,
};
