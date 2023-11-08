import { v4 as uuid } from 'uuid';

/**
 * This is the data type for the layout
 * conditions to be noted:
 * 1-if cell has children cells, the either of isHorizontal or isVertical is set true
 * 2-if layout has data the, both isHorizontal and isVertical is false
 */
export type Layout = {
    id: string;
    isHorizontal?: boolean;
    isVertical?: boolean;
    cells: Layout[];
    data: string | null | undefined;
  };

/**
 * @returns This returns array of default 4 cells with empty data
 */
export function getDefaultLayout(): Layout[] {
    const cellArray: Layout[] = Array.from({ length: 4 }, (_, index) => {
        const cell : Layout = {
            id: uuid(),
            isHorizontal: false,
            isVertical: false,
            cells: [],
            data: null
        };
        return cell;
    });
    return cellArray;
}

/**
 * @returns This returns default cell with empty data
 */
export function getDefaultLayoutCell(): Layout {
    const cell : Layout = {
        id: uuid(),
        isHorizontal: false,
        isVertical: false,
        cells: [],
        data: null
    };
    return cell;
}

/**
 * @returns This functions returns updated layout array data with updated data field of particular cell id
 */
export function updateLayoutData(layoutData: Layout[], id: string, imageSrc: string | null): Layout[] {
    return layoutData.map((layout: Layout) => {
      if (layout.id === id) {
        return {
          ...layout,
          data: imageSrc
        };
      } else if (layout.cells.length > 0) {
        const updatedCells = updateLayoutData(layout.cells, id, imageSrc);
        if (updatedCells !== layout.cells) {
          return {
            ...layout,
            cells: updatedCells
          };
        }
      }
      return layout;
    });
}

/**
 * @returns This function helps to split particular cell.
 */
export function updateLayoutSplit(layoutData: Layout[], id: string, isHorizontalSplit: boolean): Layout[] {
    return layoutData.map((layout: Layout) => {
      if (layout.id === id) {
        const formattedCellData =  {
          ...layout,
          data: null,
          cells:[{
            ...layout,
            id: uuid()
          }, {
            ...layout,
            id: uuid()
          }]
        };
        if(isHorizontalSplit) {
            return {
                ...formattedCellData,
                isHorizontal: true,
                isVertical: false,
            };
        } else {
            return {
                ...formattedCellData,
                isVertical: true,
                isHorizontal: false,
            };
        }
      } else if (layout.cells.length > 0) {
        const updatedCells = updateLayoutSplit(layout.cells, id, isHorizontalSplit);
        if (updatedCells !== layout.cells) {
          return {
            ...layout,
            cells: updatedCells
          };
        }
      }
      return layout;
    });
}