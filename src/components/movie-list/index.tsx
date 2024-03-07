import { MovieDataType } from "../../assets/data";
import { Grid, Paper } from "@mui/material";
import MovieCard from "../movie-card";

interface MovieListProps {
    recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {
    return (
        <Grid container spacing={2}>
            {recommendList.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                    <MovieCard movie={movie} />
                </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;
