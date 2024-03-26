package com.partyplanner.nandhini.dto.response;

import com.partyplanner.nandhini.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private String id;
    private String username;
    private String email;
    private Role role;
 
    // private Long phoneno;
    // private String Address;

}