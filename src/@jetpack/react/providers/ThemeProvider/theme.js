export const masterStylesheet = `html {}
body {}
h1, h2, h3, h4, h5, h6 {}
p {}
button {
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  min-width: 64px;
  outline: 0px;
  position: relative;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  vertical-align: middle; 
}
button:disabled,
button[disabled] {
  color: rgba(0, 0, 0, 0.26);
  cursor: default;
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
  border-radius: 4px;
  &--contained {
    background-color: rgb(25, 118, 210);
    border: 0px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    color: rgb(255, 255, 255);

    &-small {
      padding: 4px 10px;
    }
    &-medium {
      padding: 6px 16px;
    }
    &-large {
      padding: 8px 22px;
    }

    &:disabled,
    &[disabled] {
      background-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
      color: rgba(0, 0, 0, 0.26);
    }
  }
  &--outlined {
    background-color: transparent;
    border: 1px solid rgba(25, 118, 210, 0.5);
    box-shadow: none;
    color: rgb(25, 118, 210);

    &-small {
      padding: 3px 9px;
    }
    &-medium {
      padding: 5px 15px;
    }
    &-large {
      padding: 7px 21px;
    }

    &:disabled,
    &[disabled] {
      border: 1px solid rgba(0, 0, 0, 0.26);
      color: rgba(0, 0, 0, 0.26);
    }
  }
  &--text {
    background-color: transparent;
    border: 0px;
    border-radius: 4px;
    color: rgb(25, 118, 210);

    &-small {
      padding: 4px 5px;
    }
    &-medium {
      padding: 6px 8px;
    }
    &-large {
      padding: 8px 11px;
    }

    &:disabled,
    &[disabled] {
      color: rgba(0, 0, 0, 0.26);
    }

    &:hover {
      background-color: rgba(25, 118, 210, 0.04);
      text-decoration: none;
    }
  }
}
`;
