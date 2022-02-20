import React, { useState } from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { Grid } from "./style";
import { getData } from "../../api/index";

interface Data {
  type: string;
  title: string;
  position: number;
  image: string;
}

interface SortableElementProps {
  image: string;
  title: string;
}

interface SortingProps {
  oldIndex: number;
  newIndex: number;
}

const SortableImages = SortableElement((item: SortableElementProps) => <div>Item {item.title}</div>);
const SortableImageGallery = SortableContainer(({ items }: { items: Data[] }) => (
  <Grid>
    {items.map((value: Data, index) => (
      <SortableImages
        key={`item-${index}`}
        index={index}
        image={value.image}
        title={value.title}
      />
    ))}
  </Grid>
));

export const ImageGallery = () => {
  const [items, setItems] = useState<Data[]>(getData);

  const onSortEnd = ({ oldIndex, newIndex }: SortingProps) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <>
      <h2>Vector AI Image Gallery</h2>
      <SortableImageGallery items={items} onSortEnd={onSortEnd} axis={"xy"} distance={1} />
    </>
  );
};
