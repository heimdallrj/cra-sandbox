export const masterStylesheet = `html {}
aside {}
article {}
b {}
body {}
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
code {}
del {}
div {}
details {}
em {}
figcaption {}
figure {}
footer {}
h1, h2, h3, h4, h5, h6 {}
header {}
i {}
input {}
input[type='checkbox'] {}
ins {}
main {}
mark {}
nav {}
option {}
p {}
pre {}
select {}
section {}
small {}
span {}
strong {}
sub {}
summary {}
sup {}
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
time {}

/* Custom:Accordion */
.{prefix}-accordion {
  display: flex;
  flex-direction: column;
  .{prefix}-accordion__item {
  }
  .{prefix}-accordion__title {
    background: rgb(0 0 0 / 20%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .{prefix}-accordion__content {
    padding: 10px;
  }
}

/* Custom:Button */
.{prefix}-btn {
  border-radius: 4px;
  &__contained {
    background-color: rgb(25, 118, 210);
    border: 0px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    color: rgb(255, 255, 255);

    &--small {
      padding: 4px 10px;
    }
    &--medium {
      padding: 6px 16px;
    }
    &--large {
      padding: 8px 22px;
    }

    &:disabled,
    &[disabled] {
      background-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
      color: rgba(0, 0, 0, 0.26);
    }
  }
  &__outlined {
    background-color: transparent;
    border: 1px solid rgba(25, 118, 210, 0.5);
    box-shadow: none;
    color: rgb(25, 118, 210);

    &--small {
      padding: 3px 9px;
    }
    &--medium {
      padding: 5px 15px;
    }
    &--large {
      padding: 7px 21px;
    }

    &:disabled,
    &[disabled] {
      border: 1px solid rgba(0, 0, 0, 0.26);
      color: rgba(0, 0, 0, 0.26);
    }
  }
  &__text {
    background-color: transparent;
    border: 0px;
    border-radius: 4px;
    color: rgb(25, 118, 210);

    &--small {
      padding: 4px 5px;
    }
    &--medium {
      padding: 6px 8px;
    }
    &--large {
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

/* Custom:Checkbox */
.{prefix}-checkbox {
  display: flex;
  align-items: center;
  gap: 5px;

  &__input {}
  &__label {}
}

/* Custom:Radio */
.{prefix}-radio {
  display: flex;
  align-items: center;
  gap: 5px;
  
  &__input {}
  &__label {}
}

/* Custom:Tabs */
.{prefix}-tabs {
  .{prefix}-tab {
    border-bottom: 1px solid #ccc;
    padding-left: 0;

    &__button {
      cursor: pointer;
      display: inline-block;
      list-style: none;
      margin-bottom: -1px;
      padding: 0.5rem 0.75rem;
    }

    &--active {
      background-color: white;
      border: solid #ccc;
      border-width: 1px 1px 0 1px;
    }
  }
 }
`;
