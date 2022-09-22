package aa.api.dialer.model.event;

import aa.api.dialer.model.CallEvent;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
@EqualsAndHashCode(callSuper = true)
public class AnsweredCallEvent extends ApplicationEvent  {
  private final CallEvent event;

  public AnsweredCallEvent(Object source, CallEvent event) {
    super(source);
    this.event = event;
  }
}
