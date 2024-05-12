import Card from "../../../../adminComponents/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import {
  MdCheckCircle,
  MdCancel,
  MdOutlineError,
  MdOutlinePhoneDisabled,
} from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { useMemo } from "react";
import { useState } from "react";
import GlobalFilter from "./GlobalFilter";
import Pagination from "./Pagination";
import NewOrderModal from "../../../../adminComponents/modal/NewOrderModal";

const ComplexTable = (props) => {
  const { columnsData, tableData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const handleOpenModal = (rowData) => {
    setIsModalOpen(true);
    setSelectedRowData(rowData);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    prepareRow,
    initialState,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    goToPage,
  } = tableInstance;
  initialState.pageSize = 10;

  const { globalFilter } = state;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          New Order List
        </div>
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={tableInstance.setGlobalFilter}
        />
      </div>

      <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "ORDER ID") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PRODUCT NAME") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "CC STATUS") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "Confirm" ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "WH STATUS") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "Not Delivered" ? (
                              <MdCancel className="text-red-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "ORDER DATE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "ENTER") {
                      data = (
                        <FaArrowCircleRight
                          onClick={() => handleOpenModal(row.original)}
                          size={20}
                          className="text-purple-500 cursor-pointer"
                        />
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageIndex={state.pageIndex} // Update to use state.pageIndex
        pageCount={page.length}
        goToPage={goToPage}
        nextPage={nextPage}
        previousPage={previousPage}
        totalItems={data.length} // Pass the total number of items as totalItems
      />
      {isModalOpen && (
        <NewOrderModal
          handleCloseModal={handleCloseModal}
          rowData={selectedRowData}
        />
      )}
    </Card>
  );
};

export default ComplexTable;
