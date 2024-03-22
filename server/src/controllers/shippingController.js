import Shipping from "../models/Shipping.js";
export async function createShipping(req, res) {
  const {
    ship_id,
    item_id,
    shipping_status,
    requested_departure_date,
    approved_departure_date,
    payment_status,
  } = req.body;
  try {
    let shipping = await Shipping.create({
      ship_id,
      item_id,
      shipping_status,
      requested_departure_date,
      approved_departure_date,
      payment_status,
    });
    if (!shipping) {
      return res.status(400).json({ message: "Shipping creation failed" });
    }
    return res.status(201).json({ message: "Shipping successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function updateShipping(req, res) {
  const {
    ship_id,
    item_id,
    shipping_status,
    requested_departure_date,
    approved_departure_date,
    payment_status,
  } = req.body;
  const id = req.params.id;

  try {
    let shipping = await Shipping.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          ship_id,
          item_id,
          shipping_status,
          requested_departure_date,
          approved_departure_date,
          payment_status,
        },
      }
    );
    if (!shipping) {
      return res.status(404).json({ message: "Shipping not found" });
    }
    return res.status(201).json({ message: "Shipping successfully updated" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteShipping(req, res) {
  const id = req.params.id;
  try {
    const shipping = await Shipping.findByIdAndDelete({ _id: id });
    if (!shipping) {
      return res.status(401).json({ message: "Shipping not found" });
    }
    return res.status(201).json({ message: "Shipping successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getShippings(req, res) {
  try {
    const shippings = await Shipping.find({});
    if (shippings.length == 0) {
      return res.status(404).json({ message: "ShipOwners  not found" });
    }
    return res.status(201).json({ data: shippings });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
