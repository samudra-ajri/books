import { Grid, TextField } from "@mui/material"
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(search);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid container justifyContent="center" padding={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="Search"
              placeholder="Search your book..."
              variant="standard"
              value={search}
              onChange={onChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default SearchBar
