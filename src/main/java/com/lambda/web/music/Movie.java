package com.lambda.web.music;

import lombok.Builder;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity @Component
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movieSeq;
    @Column(length = 4)
    private String rank;
    @Column(length = 100)
    private String title;
    @Column(length = 10)
    private String rankDate;

    public Long getMovieSeq() {
        return movieSeq;
    }

    public void setMovieSeq(Long movieSeq) {
        this.movieSeq = movieSeq;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRankDate() {
        return rankDate;
    }

    public void setRankDate(String rankDate) {
        this.rankDate = rankDate;
    }

    public Movie(){}

    @Builder
    public Movie(String rank, String title, String rankDate) {
        this.rank = rank;
        this.title = title;
        this.rankDate = rankDate;
    }

    @Override
    public String toString() {
        return "Movie{" +
                ", rank='" + rank + '\'' +
                ", title='" + title + '\'' +
                ", rankDate='" + rankDate + '\'' +
                '}';
    }
}
