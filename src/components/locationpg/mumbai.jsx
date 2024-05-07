import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { Navigation } from '../navigation';
import first from "../../components/locationpg/assets/Accident_type_mumbai.png";
import second from "../../components/locationpg/assets/Collision_type_mumbai.png";
import third from "../../components/locationpg/assets/mumbai.jpeg";

export default function Mumbai() {
  const [data, setData] = useState([
    {
      "id": 1,
      "article_content": "GUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sister.\n",
      "short_descp": "Former Assam cricketer Utpal Kalita died in a road accident",
      "date": "2023-05-22",
      "place_name": "Guwahati to Goalpara",
      "district": "Guwahati",
      "state": "Assam",
      "latitude": "26.11579170",
      "longitude": "91.70859330",
      "area_type": "Urban",
      "accident_type": "Fatal",
      "persons_killed": 1,
      "persons_grievously_injured": 0,
      "persons_minor_injured": 0,
      "no_motorized_vehicles": 1,
      "no_non_moterized_vehicles": 0,
      "no_pedestrians_involved": 0,
      "collosion_type": "Not Specified",
      "road_type": "Not Specified"
    },
    {
      "id": 1,
      "article_content": "GUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sister.\n",
      "short_descp": "Former Assam cricketer Utpal Kalita died in a road accident",
      "date": "2023-05-22",
      "place_name": "Guwahati to Goalpara",
      "district": "Guwahati",
      "state": "Assam",
      "latitude": "26.11579170",
      "longitude": "91.70859330",
      "area_type": "Urban",
      "accident_type": "Fatal",
      "persons_killed": 1,
      "persons_grievously_injured": 0,
      "persons_minor_injured": 0,
      "no_motorized_vehicles": 1,
      "no_non_moterized_vehicles": 0,
      "no_pedestrians_involved": 0,
      "collosion_type": "Not Specified",
      "road_type": "Not Specified"
    },
    {
      "id": 1,
      "article_content": "GUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sister.\n",
      "short_descp": "Former Assam cricketer Utpal Kalita died in a road accident",
      "date": "2023-05-22",
      "place_name": "Guwahati to Goalpara",
      "district": "Guwahati",
      "state": "Assam",
      "latitude": "26.11579170",
      "longitude": "91.70859330",
      "area_type": "Urban",
      "accident_type": "Fatal",
      "persons_killed": 1,
      "persons_grievously_injured": 0,
      "persons_minor_injured": 0,
      "no_motorized_vehicles": 1,
      "no_non_moterized_vehicles": 0,
      "no_pedestrians_involved": 0,
      "collosion_type": "Not Specified",
      "road_type": "Not Specified"
    },
    {
      "id": 1,
      "article_content": "GUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sisterGUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sisterGUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sisterGUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sisterGUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sisterGUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sisterGUWAHATI: In an unfortunate incident, former cricketer of Assam and coach Utpal Kalita passed away on May 22.\nAccording to reports, Kalita met with a tragic road accident while he was on his way from Guwahati to Goalpara.\nHe was a resident of Bapuji Nagar in Goalpara.\nThe 36-year-old Kalita leaves behind his mother, elder brother and a sister.\n",
      "short_descp": "Former Assam cricketer Utpal Kalita died in a road accident",
      "date": "2023-05-22",
      "place_name": "Guwahati to Goalpara",
      "district": "Guwahati",
      "state": "Assam",
      "latitude": "26.11579170",
      "longitude": "91.70859330",
      "area_type": "Urban",
      "accident_type": "Fatal",
      "persons_killed": 1,
      "persons_grievously_injured": 0,
      "persons_minor_injured": 0,
      "no_motorized_vehicles": 1,
      "no_non_moterized_vehicles": 0,
      "no_pedestrians_involved": 0,
      "collosion_type": "Not Specified",
      "road_type": "Not Specified"
    }
    // Add more dummy data as needed
  ]);

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(() => {
    if (!data.length) return [];
    return Object.keys(data[0]).map((key) => ({
      Header: key,
      accessor: key,
    }));
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData }, useSortBy);

  useEffect(() => {
    fetch(`https://btp-2023.onrender.com/news`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData["news"])
      })
  }, []);

  const handleRowClick = (row) => {
    row.toggleRowExpanded();
  };

  return (
    <div>
      <h1 >Mumbai Accident Data</h1>
      <div className="flex flex-row gap-4">
        {/* First Image */}
        <img src={first} alt="Image 1" className="flex-1 max-w-sm" />

        {/* Second Image */}
        <img src={second} alt="Image 2" className="flex-1 max-w-sm" />

        {/* Third Image */}
        <img src={third} alt="Image 3" className="flex-1 max-w-sm" />
        </div>

      <table {...getTableProps()} style={{ border: 'solid 1px white' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 3px red',
                    color: 'white',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '🔽'
                        : '🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <React.Fragment key={row.id}>
                <tr
                  {...row.getRowProps()}
                  onClick={() => handleRowClick(row)}
                  style={{ cursor: 'pointer', height: '50px' }} // Adjust height as needed
                >
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={columns.length}>
                      {/* Your expanded row content goes here */}
                      <div style={{ height: '100px', overflow: 'auto' }}>
                        {JSON.stringify(row.original)}
                      </div>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
