import Ship from "../models/ship.js";

export async function createShip(req, res) {
  const { ship_name, ship_capacity, ship_type, description } = req.body;
  const shipowner_id = req.shipowner_id;
  try {
    let ship = await Ship.create({
      ship_name,
      ship_capacity,
      ship_type,
      description,
      shipowner_id,
    });
    if (!ship) {
      return res.status(400).json({ message: "Ship creation failed" });
    }
    return res.status(201).json({ message: "Ship successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function updateShip(req, res) {
  const { ship_name, ship_capacity, ship_type, description } = req.body;
  const id = req.params.id;

  try {
    let ship = await Ship.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          ship_name,
          ship_capacity,
          ship_type,
          description,
        },
      }
    );
    if (!ship) {
      return res.status(404).json({ message: "Ship not found" });
    }
    return res.status(201).json({ message: "Ship successfully updated" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteShip(req, res) {
  const id = req.params.id;
  try {
    const ship = await Ship.findByIdAndDelete({ _id: id });
    if (!ship) {
      return res.status(401).json({ message: "Ship not found" });
    }
    return res.status(201).json({ message: "Ship successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getShips(req, res) {
  try {
    const ships = await Ship.find({});
    if (ships.length == 0) {
      return res.status(404).json({ message: "ships  not found" });
    }
    return res.status(201).json({ data: ships });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
