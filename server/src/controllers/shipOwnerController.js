import ShipOwner from "../models/shipowner.js";
export async function createShipOwner(req, res) {
  const { company_name, contact_name, contact_email, contact_phone } = req.body;
  try {
    let shipOwner = await ShipOwner.create({
        company_name, contact_name, contact_email, contact_phone
    });
    if (!shipOwner) {
      return res.status(400).json({ message: "ShipOwner creation failed" });
    }
    return res.status(201).json({ message: "ShipOwner successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function updateShipOwner(req, res) {
  const { company_name, contact_name, contact_email, contact_phone } = req.body;
  const id = req.params.id;

  try {
    let shipOwner = await ShipOwner.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
            company_name, contact_name, contact_email, contact_phone
        },
      }
    );
    if (!shipOwner) {
      return res.status(404).json({ message: "ShipOwner not found" });
    }
    return res.status(201).json({ message: "ShipOwner successfully updated" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteShipOwner(req, res) {
  const id = req.params.id;
  try {
    const shipOwner = await ShipOwner.findByIdAndDelete({ _id: id });
    if (!shipOwner) {
      return res.status(401).json({ message: "ShipOwner not found" });
    }
    return res.status(201).json({ message: "ShipOwner successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getShipOwners(req, res) {
  try {
    const shipOwners = await ShipOwner.find({});
    if (shipOwners.length == 0) {
      return res.status(404).json({ message: "ShipOwners  not found" });
    }
    return res.status(201).json({ data: shipOwners });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
