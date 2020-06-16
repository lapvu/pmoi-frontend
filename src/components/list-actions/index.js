import React, { cloneElement } from "react";
import { TopToolbar, CreateButton, sanitizeListRestProps } from "react-admin";

export const ListActions = ({
  currentSort,
  className,
  resource,
  filters,
  displayedFilters,
  exporter,
  filterValues,
  permanentFilter,
  hasCreate,
  basePath,
  selectedIds,
  onUnselectItems,
  showFilter,
  maxResults,
  total,
  ...rest
}) => (
  <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
    {filters &&
      cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: "button",
      })}
    <CreateButton
      basePath={basePath}
      label="Thêm mới"
      style={{
        color: "#fff",
        background: "#2980b9",
        padding: "0.3rem 0.6rem",
      }}
    />
  </TopToolbar>
);
