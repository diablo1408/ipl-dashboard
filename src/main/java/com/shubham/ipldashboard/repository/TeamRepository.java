package com.shubham.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.shubham.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
	
	Team findByTeamName(String teamName);

}
