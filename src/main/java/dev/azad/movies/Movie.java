package dev.azad.movies;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collation = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Movie {
    @Id
    private  Object id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
}
