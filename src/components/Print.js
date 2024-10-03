// import React, { useRef } from 'react'
// import { useReactToPrint } from 'react-to-print';
// import { Button } from 'react-bootstrap';
// import Dashboard from './Dashboard'


// // export const ComponentToPrint = React.forwardRef((props, ref) => {
// //     return (
// //       <div ref={ref}></div>
// //     );
// //   });





// const Print = () => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   return (
//     <div>
//       <Dashboard ref={componentRef} />
//       <Button className='btn btn-secondary' onClick={handlePrint}>Print</Button>
//     </div>
//   );
// };

// export default Print