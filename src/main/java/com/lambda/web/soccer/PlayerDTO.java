package com.lambda.web.soccer;

import lombok.Data;
import org.springframework.stereotype.Component;
@Data
@Component
public class PlayerDTO {
    private String ePlayerName,
     nickname,
     joinYyyy,
     position,
     backNo,
     nation,
     birthDate,
     solar,
     height,
     weight;
}
