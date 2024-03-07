import { Box, Grid, Paper } from '@mui/material';
import { MovieDataType } from '../../assets/data';
import MovieTrendCard from '../movie-card/movieTrend';

interface MovieTrendListProps {
    trendList : MovieDataType[];
}

const MovieTrendList = ({trendList} : MovieTrendListProps) => {
  return (
    <Box sx={{display: "flex", gap:2, overflowX: "scroll"}}>
      {trendList.map(movie => (
         <Grid item key={movie.id}>
            <Paper elevation={0} sx={{backgroundColor: "transparent"}}>
                <MovieTrendCard movie={movie}/>
            </Paper>
        </Grid>
      ))}
    </Box>
  )
}

export default MovieTrendList