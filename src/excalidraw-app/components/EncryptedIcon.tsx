import { shield } from "../../components/icons";
import { Tooltip } from "../../components/Tooltip";
import { t } from "../../i18n";

export const EncryptedIcon = () => (
  <a
    className="encrypted-icon tooltip"
    target="_blank"
    rel="noopener noreferrer"
  >
    {/*<Tooltip label={t("encrypted.tooltip")} long={true}>*/}
      {shield}
    {/*</Tooltip>*/}
  </a>
);
