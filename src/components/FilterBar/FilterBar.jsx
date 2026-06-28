import "./FilterBar.css";

const FilterBar = ({
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Filter</label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort</label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Due Date">Due Date</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;