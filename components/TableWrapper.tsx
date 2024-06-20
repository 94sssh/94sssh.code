const TableWrapper = ({ children }) => {
  return (
    <div className="mx-auto w-fit overflow-x-auto">
      <table>{children}</table>
    </div>
  )
}

export default TableWrapper
