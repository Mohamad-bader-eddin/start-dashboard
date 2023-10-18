import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericDialog from "../../../share/components/Dialog/GenericDialog";
import Table from "../../../share/components/table/Table";
import useAssignOrderToColumn from "../hooks/useAssignOrderToColumn";
import useAssignOrderToRows from "../hooks/useAssignOrderToRows";
import { useTranslation } from "react-i18next";

const ActionButton = ({ type }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCancelDialog, setOPenCancelDialog] = useState(false);
  const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const [openBreakDialog, setOpenBreakDialog] = useState(false);
  const { columns } = useAssignOrderToColumn();
  const { initialRows } = useAssignOrderToRows();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTrack = () => {
    navigate(`/orders/track-order/${type}`);
    setAnchorEl(null);
  };
  const handleInfo = () => {
    navigate(`/orders/info-orders/${type}`);
    setAnchorEl(null);
  };
  const handleAssignTo = () => {
    setOPenAssignDialog(true);
    setAnchorEl(null);
  };
  const handleCancel = () => {
    setOPenCancelDialog(true);
    setAnchorEl(null);
  };
  const handleBreak = () => {
    setOpenBreakDialog(true);
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="info"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          ".css-9tj150-MuiButton-endIcon": {
            marginInline: "8px -4px !important",
          },
        }}
      >
        {t("actions")}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleTrack} disableRipple>
          <TravelExploreIcon sx={{ marginInlineEnd: "15px" }} />
          {t("track")}
        </MenuItem>
        <MenuItem onClick={handleInfo} disableRipple>
          <HelpOutlineIcon sx={{ marginInlineEnd: "15px" }} />
          {t("info")}
        </MenuItem>
        {type === "pending" && (
          <MenuItem onClick={handleAssignTo} disableRipple>
            <AssignmentTurnedInIcon sx={{ marginInlineEnd: "15px" }} />
            {t("assign_to")}
          </MenuItem>
        )}
        {type === "active" && (
          <MenuItem onClick={handleBreak} disableRipple>
            <DoDisturbOnIcon sx={{ marginInlineEnd: "15px" }} />
            {t("break")}
          </MenuItem>
        )}
        {(type === "pending" || type === "active" || type === "schedule") && (
          <MenuItem onClick={handleCancel} disableRipple>
            <DoDisturbIcon sx={{ marginInlineEnd: "15px" }} />
            {t("cancel")}
          </MenuItem>
        )}
      </Menu>
      <GenericDialog
        open={openAssignDialog}
        setOpen={setOPenAssignDialog}
        fullScreen={true}
        elementContent={<Table columns={columns} rows={initialRows} />}
      />
      <GenericDialog
        open={openCancelDialog}
        setOpen={setOPenCancelDialog}
        elementContent={t("delete_order_message")}
      />
      <GenericDialog
        open={openBreakDialog}
        setOpen={setOpenBreakDialog}
        elementContent={t("block_order_message")}
      />
    </div>
  );
};

type ActionButtonProps = {
  type: "active" | "pending" | "arrived" | "canceled" | "schedule";
};

export default ActionButton;
