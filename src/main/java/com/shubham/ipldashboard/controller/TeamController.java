package com.shubham.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shubham.ipldashboard.model.Match;
import com.shubham.ipldashboard.model.Team;
import com.shubham.ipldashboard.repository.MatchRespository;
import com.shubham.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
  
	
	private TeamRepository teamRepository;
	
	private MatchRespository matchRespository;
	
	
	@Autowired
	public TeamController(TeamRepository teamRepository,MatchRespository matchRespository) {
		
		this.teamRepository = teamRepository;
		this.matchRespository=matchRespository;
	}
	
	
	@GetMapping("/team")
	public Iterable<Team> getAllTeam() {
		return teamRepository.findAll()
		//Pageable  pageable =PageRequest.of(0, 4);
		 ;
	}
	



	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team=teamRepository.findByTeamName(teamName);
		//Pageable  pageable =PageRequest.of(0, 4);
		 team.setMatches(matchRespository.findLatestMatchesbyTeam(teamName, PageRequest.of(0, 4)));
		
		return team;
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> getMatchesForTeam(@PathVariable String teamName,@RequestParam int year ){
		
		  LocalDate startDate= LocalDate.of(year, 1, 1);
		  LocalDate endDate= LocalDate.of(year+1, 1, 1);
		 return matchRespository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
		
		
		
	}
	
}
