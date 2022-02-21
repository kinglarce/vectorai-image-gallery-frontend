import React, { useState, useEffect } from "react";
import { ImageDetail } from "../ImageDetail/ImageDetail";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { Grid } from "./style";
import { getData, syncData } from "../../api/index";
import { Data } from "../../interface";
import { Loading } from '../Loading/Loading';

const INTERVAL_SECONDS = 5000;

interface SortableElementProps {
  image: string;
  title: string;
}

interface SortingProps {
  oldIndex: number;
  newIndex: number;
}

const SortableImages = SortableElement((item: SortableElementProps) => <ImageDetail {...item} />);
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
  const [items, setItems] = useState<Data[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>(new Date().toLocaleString());
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getData().then((response: Data[] | undefined) => {
      setItems(response!)
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isUpdated) {
        setLoading(true);
        syncData(items).then(() => {
          setIsUpdated(false);
          setLastUpdate(new Date().toLocaleString());
          setLoading(false);
        });
      }
    }, INTERVAL_SECONDS);
    return () => clearInterval(interval);
  }, [isUpdated, items]);

  const onSortEnd = ({ oldIndex, newIndex }: SortingProps) => {
    // Note: Verifying if change has been made
    if (oldIndex !== newIndex) {
      const updatedItems = arrayMove(items, oldIndex, newIndex);
      const updatedPositionItems = updatedItems
          .map((data: Data, index: number) => ({...data, position: index}));
      setItems(updatedPositionItems);
      setIsUpdated(true);
    }
  };

  return (
    <>
      <h2>Vector AI Image Gallery</h2>
      <label>Last Updated: {lastUpdate}</label>
      <Loading loading={loading} />
      <div style={{ display: loading ? "none" : "block" }}>
        <SortableImageGallery items={items} onSortEnd={onSortEnd} axis={"xy"} distance={1} />
      </div>
    </>
  );
};
