import { FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../hooks/use-toast";
import { useCreateProductStore } from "../store/CreateProductStore";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const { title, description, file, setTitle, setDescription, setFile } =
    useCreateProductStore();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    if (title.trim() && description.trim() && file.trim()) {
      e.preventDefault();
      toast({
        description: "Product updated successfully.",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  return (
    <div className="container flex justify-center">
      <Toaster />
      <form
        className="my-8 ml-10 w-[260px] lg:w-[460px] flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[28px] font-semibold">Create Product</h1>
        <label htmlFor="title">Title</label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        <label htmlFor="title">Description</label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
        <label htmlFor="title">Insert file here </label>
        <Input
          value={file}
          onChange={(e) => setFile(e.target.value)}
          type="file"
        ></Input>
        <Button
          className="text-white bg-black hover:opacity-90 mt-2"
          type="submit"
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default CreateProduct;
