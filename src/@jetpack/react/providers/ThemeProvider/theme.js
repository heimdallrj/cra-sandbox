export const masterStylesheet = `html {}
body {}
h1, h2, h3, h4, h5, h6 {}
p {}
button {
  cursor: pointer;
}
/* Table Styles */
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  th, td { padding: 12px 15px; }
  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
    }
    tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    tr:last-of-type {
      border-bottom: 2px solid #009879;
    }
    tr.active-row {
      font-weight: bold;
      color: #009879;
    }
  } 
}
/* Accordion Styles */
.{prefix}-accordion {
  display: flex;
  flex-direction: column;
  gap: 3px;
  .{prefix}-accordion-item {}
  .{prefix}-accordion-title {
    background-color: #505084;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .{prefix}-accordion-content {
    padding: 10px;
  }
}
/* Button */
.{prefix}-btn {
  border: none;
  padding: 10px 15px;
  min-width: 100px;

  /* Color */
  &--primary {
    background-color: var(--primary-color);
    color: #ffffff;
  }
  &--secondary {
    background-color: var(--secondary-color);
    color: #ffffff;
  }
  &--tertiary {
    background-color: var(--tertiary-color);
    color: #ffffff;
  }
  &--quaternary {
    background-color: var(--quaternary-color);
    color: #ffffff;
  }
  &--tertiary {
    background-color: var(--tertiary-color);
    color: #ffffff;
  }
  &--success {
    background-color: var(--success-color);
    color: #ffffff;
  }
  &--error {
    background-color: var(--error-color);
    color: #ffffff;
  }
  &--info {
    background-color: var(--info-color);
    color: #ffffff;
  }
  &--warning {
    background-color: var(--warning-color);
    color: #ffffff;
  }
}
`;
