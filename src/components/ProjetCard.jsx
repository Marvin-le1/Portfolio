import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
  width: { xs: "92%", sm: 560, md: 720 },
  outline: "none",
};

function ProjetCard({ titre, description, image, lien }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="projet-card"
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleOpen();
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {image ? (
          <img className="projet-image" src={image} alt={titre} />
        ) : (
          <div className="projet-placeholder">Aucune image disponible</div>
        )}
        <h3 className="projet-titre">{titre}</h3>
        <p className="projet-description">{description}</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="projet-modal-title"
        aria-describedby="projet-modal-desc"
      >
        <Box sx={modalStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <Typography id="projet-modal-title" variant="h6" component="h3">
              {titre}
            </Typography>
            <IconButton aria-label="Fermer" onClick={handleClose} size="small">
              ×
            </IconButton>
          </div>

          {image ? (
            <img
              src={image}
              alt={titre}
              style={{ width: "80%", display: "block", margin: "12px auto 0", height: "auto", borderRadius: 8 }}
            />
          ) : (
            <div
              style={{
                height: 260,
                borderRadius: 8,
                background: "#f2f2f2",
                display: "grid",
                placeItems: "center",
                color: "#777",
                fontWeight: 600,
                marginTop: 12,
              }}
            >
              Aucune image disponible
            </div>
          )}

          <Typography id="projet-modal-desc" variant="body1" sx={{ mt: 2, fontSize: "1.1rem", lineHeight: 1.6 }}>
            {description}
          </Typography>

          {lien && (
            <a
              href={lien}
              target="_blank"
              rel="noreferrer noopener"
              style={{ display: "inline-block", marginTop: 12, fontWeight: 600 }}
            >
              Ouvrir le projet
            </a>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default ProjetCard;