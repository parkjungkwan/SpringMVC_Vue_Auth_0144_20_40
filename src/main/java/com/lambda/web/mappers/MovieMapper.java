package com.lambda.web.mappers;

import com.lambda.web.music.MovieDTO;
import com.lambda.web.proxy.Pager;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MovieMapper {
    public void  insertMovie();
    public int count();
    public List<MovieDTO> selectMovies(Pager pager);
}
