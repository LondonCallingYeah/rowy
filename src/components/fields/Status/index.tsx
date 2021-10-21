import { lazy } from "react";
import { IFieldConfig, FieldType } from "components/fields/types";
import withHeavyCell from "../_withTableCell/withHeavyCell";

import StatusIcon from "assets/icons/Status";
import BasicCell from "../_BasicCell/BasicCellNull";
import NullEditor from "components/Table/editors/NullEditor";

const CustomFilter = lazy(
  () => import("./Filter" /* webpackChunkName: "CustomFilter-Status" */)
);
const TableCell = lazy(
  () => import("./TableCell" /* webpackChunkName: "TableCell-Status" */)
);
const SideDrawerField = lazy(
  () =>
    import("./SideDrawerField" /* webpackChunkName: "SideDrawerField-Status" */)
);
const Settings = lazy(
  () => import("./Settings" /* webpackChunkName: "Settings-Status" */)
);

export const config: IFieldConfig = {
  type: FieldType.status,
  name: "Status",
  group: "Cloud Function",
  dataType: "any",
  initialValue: undefined,
  initializable: true,
  icon: <StatusIcon />,
  description: "Displays field value as custom status text. Read-only.	",
  TableCell: withHeavyCell(BasicCell, TableCell),
  TableEditor: NullEditor as any,
  settings: Settings,
  filter: {
    operators: [],
    customInput: CustomFilter,
  },
  SideDrawerField,
  requireConfiguration: true,
};
export default config;
