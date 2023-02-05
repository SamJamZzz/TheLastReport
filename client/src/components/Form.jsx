import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Autocomplete from '@mui/material/Autocomplete';

export default function Form() {
  const infectedTypes = ["Stalkers", "Runners", "Clickers", "Shamblers", "Bloaters", "Rat King"];

  const compassDirections = [
    { label: 'North' },
    { label: 'South'},
    { label: 'East'},
    { label: 'West' }
  ]

  const infectedCheckboxList = infectedTypes.map(type => {
    return (
      <div key={infectedTypes.indexOf(type)}>
        <input type="checkbox" id={type} value={type} className='m-1' />
        <label for={type}>{type}</label>
      </div>
    );
  });

  return (
    <form className="flex flex-col absolute right-4 top-14 w-1/4 p-4 bg-slate-900/50 text-white">
      <h1 className="text-2xl font-semibold">New Report</h1>
      <h2 className="text-xl font-semibold m-1 mt-4">Direction</h2>
      {/* <TextField
        id="outlined-basic"
        placeholder="north, south, east, north-west, etc."
        variant="outlined"
        sx={{ input: { color: 'white' } }}
      /> */}
      <Autocomplete
        disablePortal
        options={compassDirections}
        renderInput={(params) => <TextField {...params} label="North, East, South, West" />}
      />
      <h2 className="text-xl font-semibold m-1 mt-4">Amount</h2>
      <Slider
        defaultValue={0}
        min={0}
        max={100}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <h2 className="text-xl font-semibold m-1 mt-4">Infected Types</h2>
      <div className="grid grid-cols-2">
        {infectedCheckboxList}
      </div>
      <button className="bg-green-900 p-1 mt-4">Submit Report</button>
    </form>
  );
}