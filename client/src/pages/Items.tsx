import { IoMdAddCircle } from "react-icons/io";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowBigLeftDash } from "lucide-react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useDeleteItemMutation, useGetItemsQuery } from "../provider/itemSlice";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import toast from "react-hot-toast";

const Items = () => {
  const [inputSearch, setInputSearch] = useState<string>();
  const { data: getItems = [] } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation();

  const items = getItems?.data || [];

  const rows = items.filter((item) => {
    return item?.item_name
      ?.toLowerCase()
      .includes(inputSearch?.toLowerCase() || "");
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      deleteItem(id)
        .then((res) => {
          const message = res?.data?.message;
          if (message) {
            toast.success(message);
          }
        })
        .catch((error) => {
          console.log("error deleting item", error);
        });
    }
  };
  const columns: GridColDef[] = [
    { field: "item_name", headerName: "Item name", width: 130 },
    { field: "item_category", headerName: "Item category", width: 130 },
    { field: "item_description", headerName: "Item description", width: 450 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <div className="flex justify-center items-center gap-3 h-full">
            <MdEdit className="cursor-pointer text-blue-600" size={20} />
            <MdDelete
              className="cursor-pointer text-red-600"
              size={20}
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="md:container mt-5">
      <div className="flex flex-col space-y-5">
        <div className="w-full flex items-center justify-between gap-3">
          <h1 className=" text-base md:text-xl font-medium tracking-wider flex items-center gap-3">
            <Link to={"/dashboard"}>Dashboard</Link>
            <ArrowBigLeftDash className="inline" size={20} />
            <Link to={"/dashboard/items"}>Items</Link>
          </h1>
          <Button className="flex items-center gap-3">
            <Link to={"/dashboard/item/add"} className="text-base font-medium">
              <IoMdAddCircle className="inline" size={20} />
            </Link>
          </Button>
        </div>

        <Card className="w-full">
          <CardHeader>
            <Input
              type="text"
              placeholder="search for item name"
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </CardHeader>
          <CardContent>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={rows}
                className="dark:text-background dark:bg-foreground"
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={(row) => row._id}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Items;
