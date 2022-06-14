import Form from "./form";
import { FormMode } from "./index";
import React from "react";
import { useEvent } from "../api";
import { useIsAdmin, useIsOwner } from "../../../auth/provider";
import Preview from "./preview";

type Props = {
  onClose: () => void;
  eventId: number;
};

const EditOrPreviewForm: React.FC<Props> = (props) => {
  const { onClose, eventId } = props;

  const event = useEvent(eventId);
  const isAdmin = useIsAdmin();
  const isOwner = useIsOwner(event?.data?.extraUser?.user?.id);

  const canEdit = isAdmin || isOwner;

  const FORM_MODE = canEdit ? FormMode.EDIT : FormMode.READ;

  return event?.data ? (
    FORM_MODE === FormMode.EDIT ? (
      <Form event={event.data} onClose={onClose} formMode={FORM_MODE} />
    ) : (
      <Preview event={event.data} onClose={onClose} />
    )
  ) : (
    <div>Loading...</div>
  );
};

export default EditOrPreviewForm;
