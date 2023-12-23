const TableWrapper = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-2xl overflow-x-auto">
      <table>{children}</table>
    </div>
  )
}

export default TableWrapper
