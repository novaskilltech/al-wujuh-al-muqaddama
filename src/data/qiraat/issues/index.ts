import { QiraatIssue } from "../types.js";
import { basmalaIssues } from "./basmala.js";
import { mimAlJamIssues } from "./mim-al-jam.js";
import { maddIssues } from "./madd.js";
import { haaAlKinayahIssues } from "./haa-al-kinayah.js";
import { hamzIssues } from "./hamz.js";
import { saktIssues } from "./sakt.js";
import { idghamIssues } from "./idgham.js";
import { imalaIssues } from "./imala.js";
import { raatIssues } from "./raat.js";
import { lamaatIssues } from "./lamaat.js";
import { yaatIssues } from "./yaat.js";
import { farshIssues } from "./farsh.js";

export const issues: QiraatIssue[] = [
  ...basmalaIssues,
  ...mimAlJamIssues,
  ...maddIssues,
  ...haaAlKinayahIssues,
  ...hamzIssues,
  ...saktIssues,
  ...idghamIssues,
  ...imalaIssues,
  ...raatIssues,
  ...lamaatIssues,
  ...yaatIssues,
  ...farshIssues
];

export {
  basmalaIssues,
  mimAlJamIssues,
  maddIssues,
  haaAlKinayahIssues,
  hamzIssues,
  saktIssues,
  idghamIssues,
  imalaIssues,
  raatIssues,
  lamaatIssues,
  yaatIssues,
  farshIssues
};
